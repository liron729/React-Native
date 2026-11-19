import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

export default function ResourceScreen({ title, endpoint, fields, onBack }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
      .then((response) => response.json())
      .then((data) => {
        if (active) setItems(data);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [endpoint]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>‹ Resources</Text>
        </Pressable>
        <Text style={styles.title}>{title}</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#2563eb" style={styles.loader} />
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View style={styles.card}>
              {fields.map((field) => (
                <Text key={field} style={field === 'title' || field === 'name' ? styles.mainText : styles.bodyText}>
                  {field === 'title' || field === 'name' ? item[field] : `${field}: ${item[field]}`}
                </Text>
              ))}
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
    backgroundColor: '#f5f7fb',
  },
  header: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#dfe3ea',
    paddingHorizontal: 20,
    paddingTop: 42,
    paddingBottom: 16,
  },
  backButton: {
    alignSelf: 'flex-start',
  },
  backText: {
    color: '#2563eb',
    fontSize: 16,
  },
  title: {
    color: '#111827',
    fontSize: 28,
    fontWeight: '600',
    marginTop: 8,
  },
  loader: {
    marginTop: 40,
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e1e5ec',
    padding: 14,
    marginBottom: 10,
  },
  mainText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '600',
  },
  bodyText: {
    color: '#4b5563',
    fontSize: 14,
    marginTop: 5,
  },
});
