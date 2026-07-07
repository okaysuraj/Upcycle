import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function EventsFeed() {
  const router = useRouter();
  
  // Mock data for events
  const events = [
    { id: 'evt-1', title: 'Campus Clean-up Drive', date: 'Oct 15, 2026', location: 'North Quad', organizer: 'EcoClub' },
    { id: 'evt-2', title: 'Upcycling Workshop: Clothing', date: 'Oct 18, 2026', location: 'Student Union Rm 204', organizer: 'Design Dept' },
    { id: 'evt-3', title: 'Composting 101', date: 'Oct 22, 2026', location: 'Community Garden', organizer: 'AgriStudents' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Upcoming Events</Text>
      
      <ScrollView contentContainerStyle={styles.list}>
        {events.map(evt => (
          <View key={evt.id} style={styles.card}>
            <View style={styles.dateBadge}>
              <Text style={styles.dateBadgeMonth}>{evt.date.split(' ')[0]}</Text>
              <Text style={styles.dateBadgeDay}>{evt.date.split(' ')[1].replace(',', '')}</Text>
            </View>
            
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{evt.title}</Text>
              <Text style={styles.cardLocation}>{evt.location}</Text>
              <Text style={styles.cardOrganizer}>By {evt.organizer}</Text>
              
              <TouchableOpacity style={styles.rsvpButton}>
                <Text style={styles.rsvpButtonText}>RSVP</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#065f46',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    flexDirection: 'row',
    padding: 16,
  },
  dateBadge: {
    width: 60,
    height: 60,
    backgroundColor: '#ecfdf5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  dateBadgeMonth: {
    color: '#10b981',
    fontWeight: 'bold',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  dateBadgeDay: {
    color: '#047857',
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardBody: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  cardLocation: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 4,
  },
  cardOrganizer: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 12,
  },
  rsvpButton: {
    backgroundColor: '#10b981',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  rsvpButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  }
});
