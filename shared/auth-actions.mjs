// Firebase is supplied by each platform; registration only succeeds after a DB save.
export async function registerAccount(
  { auth, sdk, saveProfile },
  name,
  email,
  password,
  role = 'STUDENT'
) {
  let credential;
  try {
    try {
      credential = await sdk.createUserWithEmailAndPassword(auth, email.trim(), password);
    } catch (error) {
      if (error.code !== 'auth/email-already-in-use') throw error;
      credential = await sdk.signInWithEmailAndPassword(auth, email.trim(), password);
      if (credential.user.emailVerified)
        throw new Error('This account already exists. Sign in to continue.');
    }
    await saveProfile(credential.user, { name: name.trim(), role });
    await sdk.sendEmailVerification(credential.user);
    return {
      success: true,
      email: email.trim(),
      message:
        'Your profile was saved. Check your inbox for the verification link before signing in.',
    };
  } catch (error) {
    const message =
      error.code === 'auth/weak-password'
        ? 'Password must contain at least eight characters.'
        : error.code === 'auth/invalid-credential'
          ? 'This email already has an account. Use its password or request a reset.'
          : error.message || 'Your account could not be created. Please retry.';
    return { success: false, error: message };
  } finally {
    if (credential) await sdk.signOut(auth);
  }
}
export async function resendVerification({ auth, sdk }, email, password) {
  try {
    const credential = await sdk.signInWithEmailAndPassword(auth, email.trim(), password);
    if (credential.user.emailVerified)
      return {
        success: false,
        error: 'Your email is already verified. Sign in to continue.',
      };
    await sdk.sendEmailVerification(credential.user);
    return {
      success: true,
      message: 'A new verification link was sent to your email.',
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || 'The verification link could not be sent.',
    };
  } finally {
    await sdk.signOut(auth);
  }
}
