import { Redirect } from 'expo-router';

export default function Index() {
  // Simple redirect to the authentication screen for now
  return <Redirect href="/(auth)/login" />;
}
