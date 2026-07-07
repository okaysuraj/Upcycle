import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function EcoProfileScreen() {
  const router = useRouter();

  // Mock gamification data
  const profile = {
    name: 'Jane Doe',
    role: 'Student',
    ecoPoints: 1250,
    rank: 'Eco Warrior',
    completedTasks: 15,
    carbonOffset: '12 kg CO2',
  };

  const badges = [
    { id: '1', title: 'First Compost', icon: '🌱' },
    { id: '2', title: '10 Events', icon: '🌟' },
    { id: '3', title: 'Zero Waste Week', icon: '♻️' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{profile.name.charAt(0)}</Text>
        </View>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.role}>{profile.role}</Text>
      </View>

      <View style={styles.statsCard}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{profile.ecoPoints}</Text>
          <Text style={styles.statLabel}>EcoPoints</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{profile.rank}</Text>
          <Text style={styles.statLabel}>Rank</Text>
        </View>
      </View>

      <View style={styles.impactSection}>
        <Text style={styles.sectionTitle}>Your Impact</Text>
        <View style={styles.impactGrid}>
          <View style={styles.impactBox}>
            <Text style={styles.impactBoxValue}>{profile.completedTasks}</Text>
            <Text style={styles.impactBoxLabel}>Eco-Tasks</Text>
          </View>
          <View style={styles.impactBox}>
            <Text style={styles.impactBoxValue}>{profile.carbonOffset}</Text>
            <Text style={styles.impactBoxLabel}>Carbon Offset</Text>
          </View>
        </View>
      </View>

      <View style={styles.badgesSection}>
        <Text style={styles.sectionTitle}>Earned Badges</Text>
        <View style={styles.badgesGrid}>
          {badges.map(badge => (
            <View key={badge.id} style={styles.badgeItem}>
              <View style={styles.badgeIcon}>
                <Text style={styles.badgeIconText}>{badge.icon}</Text>
              </View>
              <Text style={styles.badgeTitle}>{badge.title}</Text>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.leaderboardButton}>
        <Text style={styles.leaderboardButtonText}>View Campus Leaderboard</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 32,
    backgroundColor: '#10b981',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#10b981',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  role: {
    fontSize: 14,
    color: '#d1fae5',
    marginTop: 4,
  },
  statsCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: -24,
    borderRadius: 16,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#e5e7eb',
  },
  impactSection: {
    paddingHorizontal: 20,
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  impactGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  impactBox: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  impactBoxValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#065f46',
  },
  impactBoxLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
  badgesSection: {
    paddingHorizontal: 20,
    marginTop: 32,
  },
  badgesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  badgeItem: {
    alignItems: 'center',
    width: '30%',
  },
  badgeIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#d1fae5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  badgeIconText: {
    fontSize: 28,
  },
  badgeTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#4b5563',
    textAlign: 'center',
  },
  leaderboardButton: {
    backgroundColor: '#10b981',
    marginHorizontal: 20,
    marginTop: 40,
    marginBottom: 40,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  leaderboardButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
