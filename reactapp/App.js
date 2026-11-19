import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Posts from './screen/posts';
import Comments from './screen/comments';
import Albums from './screen/albums';
import Photos from './screen/photos';
import Todos from './screen/todos';
import Users from './screen/users';

const resources = [
  { name: 'Posts', path: '/posts', count: '100', detail: 'Read articles', color: '#4F46E5', icon: 'P' },
  { name: 'Comments', path: '/comments', count: '500', detail: 'Join discussions', color: '#0EA5E9', icon: 'C' },
  { name: 'Albums', path: '/albums', count: '100', detail: 'Browse collections', color: '#F59E0B', icon: 'A' },
  { name: 'Photos', path: '/photos', count: '5,000', detail: 'Explore galleries', color: '#EC4899', icon: 'H' },
  { name: 'Todos', path: '/todos', count: '200', detail: 'Plan your tasks', color: '#10B981', icon: 'T' },
  { name: 'Users', path: '/users', count: '10', detail: 'Meet the community', color: '#8B5CF6', icon: 'U' },
];

export default function App() {
  const [screen, setScreen] = useState(null);
  const screens = { Posts, Comments, Albums, Photos, Todos, Users };

  if (screen) {
    const Screen = screens[screen];
    return <Screen onBack={() => setScreen(null)} />;
  }

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.pageContent}>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>DEVELOPER API</Text>
        <Text style={styles.title}>Explore resources</Text>
        <Text style={styles.subtitle}>Six ready-to-use collections for your next mobile project.</Text>
      </View>

      <View style={styles.grid}>
        {resources.map((resource) => (
          <Pressable
            key={resource.name}
            style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
            onPress={() => setScreen(resource.name)}
          >
            <View style={[styles.icon, { backgroundColor: resource.color }]}>
              <Text style={styles.iconText}>{resource.icon}</Text>
            </View>
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>{resource.name}</Text>
              <Text style={styles.cardDetail}>{resource.detail}</Text>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.count}>{resource.count}</Text>
              <Text style={styles.arrow}>→</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  pageContent: {
    minWidth: 320,
    paddingHorizontal: 20,
    paddingTop: 54,
    paddingBottom: 40,
  },
  hero: {
    maxWidth: 760,
    marginBottom: 28,
  },
  eyebrow: {
    color: '#4F46E5',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
  },
  title: {
    color: '#0F172A',
    fontSize: 42,
    fontWeight: '800',
    marginTop: 8,
  },
  subtitle: {
    color: '#64748B',
    fontSize: 17,
    lineHeight: 24,
    marginTop: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
  },
  card: {
    width: '48%',
    minWidth: 145,
    minHeight: 190,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  cardPressed: {
    opacity: 0.82,
    transform: [{ scale: 0.98 }],
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
  },
  cardText: {
    marginTop: 14,
  },
  cardTitle: {
    color: '#0F172A',
    fontSize: 20,
    fontWeight: '800',
  },
  cardDetail: {
    color: '#94A3B8',
    fontSize: 13,
    marginTop: 4,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
  count: {
    color: '#334155',
    fontSize: 16,
    fontWeight: '700',
  },
  arrow: {
    color: '#4F46E5',
    fontSize: 24,
  },
});
