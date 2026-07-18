import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { authFetch } from '../../utils/api';

export default function DriverRouteScreen() {
  const router = useRouter();
  const [routeStops, setRouteStops] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchBins = async () => {
      try {
        const res = await authFetch('/waste/bins');
        if (res.ok) {
          const bins = await res.json();
          // Filter only bins that need pickup (e.g. > 80% full)
          const pickupBins = bins.filter(b => b.fillLevel > 80);
          // Sort by fill level descending as a simple optimization
          pickupBins.sort((a, b) => b.fillLevel - a.fillLevel);
          setRouteStops(pickupBins);
        }
      } catch (err) {
        console.error("Error fetching route bins:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBins();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Optimal Pickup Route</Text>
      <Text style={styles.subtitle}>{routeStops.length} Smart Bins require attention</Text>
      
      {/* Mock Map Area */}
      <View style={styles.mapMock}>
        <Text style={styles.mapText}>[ Map View ]</Text>
        <Text style={styles.mapSubText}>Route optimized for lowest carbon footprint</Text>
      </View>
      
      {loading ? (
        <ActivityIndicator size="large" color="#065f46" style={{ marginTop: 20 }} />
      ) : (
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
      )}
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  stopHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  stopNumberBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#059669',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  stopNumberText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  stopLocation: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  stopDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingLeft: 36,
  },
  stopCategory: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '600',
  },
  stopFill: {
    fontSize: 14,
    color: '#dc2626',
    fontWeight: 'bold',
  },
  actionButton: {
    backgroundColor: '#059669',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
