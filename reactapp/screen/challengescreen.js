import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";

const students = [
  {
    firstName: "Dion",
    surname: "Konjuhi",
    birthdayDate: "12-01-2008",
    city: "Prishtina",
    phone: "+383 49 123 456",
    hobbies: [
      "Reading books",
      "Playing football",
      "Listening to music",
      "Coding",
      "Swimming",
    ],
    thingsTheyDontLike: ["Spicy food", "Loud noises", "Waiting in long lines"],
  },
  {
    firstName: "Liron",
    surname: "Aliu",
    birthdayDate: "01-04-2008",
    city: "Fushe Kosova",
    phone: "+383 43 822 778",
    hobbies: ["Cars", "Computers", "Automotive", "Coding", "Gaming"],
    thingsTheyDontLike: ["Traffic", "motorcycles", "Waiting in long lines"],
  },
  {
    firstName: "Melina",
    surname: "Salihu",
    birthdayDate: "27-09-2008",
    city: "Prishtina",
    phone: "+383 43 222 333",
    hobbies: ["Photography", "Music", "Dancing", "Hiking"],
    thingsTheyDontLike: ["Rudeness", "Negativity", "Being late"],
  },
];




const ListScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedStudent = students[selectedIndex];
  const fullName = selectedStudent.firstName + " " + selectedStudent.surname;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Profile</Text>

      <View style={styles.switcher}>
        {students.map((student, index) => (
          <TouchableOpacity
            key={`${student.firstName}-${student.surname}`}
            style={[
              styles.personButton,
              selectedIndex === index && styles.personButtonActive,
            ]}
            onPress={() => setSelectedIndex(index)}
          >
            <Text
              style={[
                styles.personButtonText,
                selectedIndex === index && styles.personButtonTextActive,
              ]}
            >
              {student.firstName}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Full Name:</Text>
        <Text style={styles.value}>{fullName}</Text>

        <Text style={styles.label}>First Name:</Text>
        <Text style={styles.value}>{selectedStudent.firstName}</Text>

        <Text style={styles.label}>Surname:</Text>
        <Text style={styles.value}>{selectedStudent.surname}</Text>

        <Text style={styles.label}>Birthday:</Text>
        <Text style={styles.value}>{selectedStudent.birthdayDate}</Text>

        <Text style={styles.label}>City:</Text>
        <Text style={styles.value}>{selectedStudent.city}</Text>

        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>{selectedStudent.phone}</Text>

      
      </View>


      <Text style={styles.thingsTheyDontLikeTitle}>Things They Don't Like:</Text>
      <FlatList
        data={selectedStudent.thingsTheyDontLike}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => (
          <View style={styles.hobbyItem}>
            <Text style={styles.hobbyText}>{item}</Text>
          </View>
        )}
      />

      <Text style={styles.hobbiesTitle}>Hobbies</Text>
    

 

      <FlatList
        data={selectedStudent.hobbies}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => (
          <View style={styles.hobbyItem}>
            <Text style={styles.hobbyText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f3f4f6",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 16,
  },
  switcher: {
    flexDirection: "row",
    marginBottom: 16,
    flexWrap: "wrap",
  },
  personButton: {
    backgroundColor: "#dfe7f5",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  personButtonActive: {
    backgroundColor: "#2563eb",
  },
  personButtonText: {
    color: "#1f2937",
    fontWeight: "600",
  },
  personButtonTextActive: {
    color: "#ffffff",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#374151",
    marginTop: 10,
  },
  value: {
    fontSize: 17,
    color: "#111827",
    marginTop: 4,
    fontWeight: "500",
  },
  hobbiesTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: 10,
  },
  thingsTheyDontLikeTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: 10,
  },
  hobbyItem: {
    backgroundColor: "#dbeafe",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginBottom: 8,
  },
  hobbyText: {
    fontSize: 16,
    color: "#1e3a8a",
    fontWeight: "600",
  },
});

export default ListScreen;

