import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function DriverRouteScreen() {
  const router = useRouter();
  
  // Mock data for bins that need pickup
  const routeStops = [
    { id: 'bin-1', location: 'North Campus Cafeteria', fillLevel: 95, category: 'ORGANIC' },
    { id: 'bin-2', location: 'Science Block A', fillLevel: 88, category: 'PLASTIC' },
    { id: 'bin-3', location: 'Main Library', fillLevel: 92, category: 'PAPER' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Optimal Pickup Route</Text>
      <Text style={styles.subtitle}>3 Smart Bins require attention</Text>
      
      {/* Mock Map Area */}
      <View style={styles.mapMock}>
        <Text style={styles.mapText}>[ Map View ]</Text>
        <Text style={styles.mapSubText}>Route optimized for lowest carbon footprint</Text>
      </View>
      
      <ScrollView style={styles.stopsList}>
        {routeStops.map((stop, index) => (
          <View key={stop.id} style={styles.stopCard}>
            <View style={styles.stopHeader}>
              <View style={styles.stopNumberBadge}>
                <Text style={styles.stopNumberText}>{index + 1}</Text>
              </View>
              <Text style={styles.stopLocation}>{stop.location}</Text>
            </View>
            
            <View style={styles.stopDetails}>
              <Text style={styles.stopCategory}>{stop.category}</Text>
              <Text style={styles.stopFill}>Fill: {stop.fillLevel}%</Text>
            </View>
            
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => router.push({
                pathname: '/(staff)/scan',
                params: { expectedBin: stop.id }
              })}
            >
              <Text style={styles.actionButtonText}>Arrived - Scan Bin</Text>
            </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#065f46',
    paddingHorizontal: 24,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  mapMock: {
    height: 200,
    backgroundColor: '#d1d5db',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    borderRadius: 12,
    marginBottom: 24,
  },
  mapText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4b5563',
  },
  mapSubText: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 8,
  },
  stopsList: {
    paddingHorizontal: 24,
  },
  stopCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  stopHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  stopNumberBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#10b981',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  stopNumberText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  stopLocation: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  stopDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  stopCategory: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    color: '#4b5563',
    fontWeight: '500',
  },
  stopFill: {
    color: '#ef4444',
    fontWeight: 'bold',
  },
  actionButton: {
    backgroundColor: '#047857',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: '600',
  }
});
