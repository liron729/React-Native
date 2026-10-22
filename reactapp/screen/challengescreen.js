import React from "react";
import { View, Text, StyleSheet } from "react-native";

const students = [
  { name: "Dion", surname: "Konjuhi", birthday_date: "12-01-2008" },
  { name: "Liron", surname: "Aliu", birthday_date: "01-04-2008" },
  { name: "Melina", surname: "Salihu", birthday_date: "27-09-2008" },
];

const headers = ["Name", "Surname", "Birthday"];

const ListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of Students</Text>

      <View style={styles.table}>
        <View style={styles.headerRow}>
          {headers.map((header) => (
            <Text key={header} style={styles.headerCell}>
              {header}
            </Text>
          ))}
        </View>

        {students.map((student) => (
          <View key={`${student.name}-${student.surname}`} style={styles.row}>
            <Text style={styles.cell}>{student.name}</Text>
            <Text style={styles.cell}>{student.surname}</Text>
            <Text style={styles.cell}>{student.birthday_date}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
    color: "#1f2937",
  },
  table: {
    borderRadius: 14,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "#746868",
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#535863",
  },
  headerCell: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: "700",
    color: "#ffffff",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
  },
  cell: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontSize: 14,
    color: "#374151",
    textAlign: "center",
  },
});

export default ListScreen;
