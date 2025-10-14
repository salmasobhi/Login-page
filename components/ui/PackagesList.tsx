// create component to render a card 
// components/ui/CustomList.tsx
import React from "react";
import { FlatList, StyleSheet } from "react-native";
// Add type for item 
type CustomListProps = {
  data: any[];
  renderItem: ({ item }: { item: any }) => React.ReactElement;
};

const PackagesList = ({ data, renderItem }: CustomListProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
    />
  )
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
  },
});

export default PackagesList;

