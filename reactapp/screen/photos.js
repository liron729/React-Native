import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Photos({ onBack }) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => {
        if (active) setPhotos(data);
      })
      .catch(() => {
        if (active) setPhotos([]);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>‹ Resources</Text>
        </Pressable>
        <Text style={styles.title}>Photos</Text>
        <Text style={styles.subtitle}>Browse 5,000 photos</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#EC4899" style={styles.loader} />
      ) : (
        <FlatList
          data={photos}
          numColumns={2}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.grid}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => (
            <View style={styles.photoCard}>
              <Image
                source={{ uri: item.thumbnailUrl }}
                style={styles.image}
                resizeMode="cover"
              />
              <Text numberOfLines={2} style={styles.photoTitle}>{item.title}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    paddingHorizontal: 20,
    paddingTop: 42,
    paddingBottom: 16,
  },
  backButton: {
    alignSelf: 'flex-start',
  },
  backText: {
    color: '#EC4899',
    fontSize: 16,
  },
  title: {
    color: '#0F172A',
    fontSize: 30,
    fontWeight: '800',
    marginTop: 8,
  },
  subtitle: {
    color: '#64748B',
    fontSize: 14,
    marginTop: 4,
  },
  loader: {
    marginTop: 40,
  },
  grid: {
    padding: 12,
  },
  row: {
    justifyContent: 'space-between',
  },
  photoCard: {
    width: '48.5%',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    marginBottom: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#F1F5F9',
  },
  photoTitle: {
    minHeight: 48,
    color: '#334155',
    fontSize: 13,
    lineHeight: 18,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});
