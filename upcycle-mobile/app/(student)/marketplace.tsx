import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function MarketplaceFeed() {
  const router = useRouter();
  
  // Mock data for marketplace listings
  const listings = [
    { id: 'item-1', title: 'Upcycled Denim Tote Bag', price: 25.00, category: 'Product', vendor: 'EcoCrafts', image: 'https://via.placeholder.com/150' },
    { id: 'item-2', title: 'Bicycle Repair Service', price: 15.00, category: 'Service', vendor: 'Campus Bikes', image: 'https://via.placeholder.com/150' },
    { id: 'item-3', title: 'Organic Compost (5kg)', price: 10.00, category: 'Product', vendor: 'AgriStudents', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Green Marketplace</Text>
      
      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Products</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Services</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.list}>
        {listings.map(item => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.cardBody}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>{item.category}</Text>
              </View>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardVendor}>by {item.vendor}</Text>
              
              <View style={styles.cardFooter}>
                <Text style={styles.cardPrice}>${item.price.toFixed(2)}</Text>
                <TouchableOpacity style={styles.buyButton}>
                  <Text style={styles.buyButtonText}>Buy Now</Text>
                </TouchableOpacity>
              </View>
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
    marginBottom: 16,
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#e5e7eb',
  },
  activeTab: {
    backgroundColor: '#10b981',
  },
  tabText: {
    fontWeight: '600',
    color: '#4b5563',
  },
  activeTabText: {
    color: '#fff',
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
  },
  cardImage: {
    width: 120,
    height: '100%',
    backgroundColor: '#d1d5db',
  },
  cardBody: {
    flex: 1,
    padding: 16,
  },
  tag: {
    backgroundColor: '#d1fae5',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 8,
  },
  tagText: {
    color: '#065f46',
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  cardVendor: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10b981',
  },
  buyButton: {
    backgroundColor: '#10b981',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  }
});
