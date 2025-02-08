import React, { useState } from 'react';
import { View, StyleSheet, Modal, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import colors from "./includes/colors";
import {borderRadius, size} from "./includes/constants";

const SelectOption = ({ listItems, selectedValueState, placeHolder,
                        selectButtonStyle={
                          alignItems:'center', justifyContent:'center',
                          backgroundColor: colors.lightGrey,
                          borderRadius: borderRadius, elevation:5, paddingVertical: 7.5, height:'35%' },
                        dispatch = null, showLabel = 'name', itemsPerPage = 100}) => {
  const [visible, setVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const toggleModal = () => setVisible(!visible);

  const handleItemPress = (item) => {
    const updateDis = () => selectedValueState.setState(item);
    dispatch !== null ? dispatch(updateDis()) : updateDis();
    toggleModal();
  };

  const loadMoreItems = () => setPageNumber(pageNumber + 1);

  const filteredItems = listItems
      .filter(item => item[showLabel].toLowerCase().includes(searchQuery.toLowerCase()))
      .slice(0, pageNumber * itemsPerPage);

  return (
      <View >
        {/* Button to Open Modal */}
        <TouchableOpacity style={selectButtonStyle} onPress={toggleModal}>
          <Text style={{ color: colors.dark, fontSize: size.text, fontWeight:'normal' }}>
            {selectedValueState.state === null ? placeHolder : selectedValueState.state[showLabel]}
          </Text>
        </TouchableOpacity>

        {/* Modal Component */}
        <Modal visible={visible} transparent={true} onRequestClose={toggleModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {/* Search Input */}
              <TextInput
                  style={styles.searchInput}
                  placeholder={`Search...`}
                  onChangeText={(text) => setSearchQuery(text)}
                  value={searchQuery}
              />

              {/* Placeholder Item */}
              <TouchableOpacity onPress={() => handleItemPress(null)} style={styles.listItem}>
                <Text style={styles.itemText}>-- {placeHolder} --</Text>
              </TouchableOpacity>

              {/* FlatList for Items */}
              <FlatList
                  data={filteredItems}
                  renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.listItem}>
                        <Text style={styles.itemText}>{item[showLabel]}</Text>
                      </TouchableOpacity>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  onEndReached={loadMoreItems}
                  onEndReachedThreshold={0.1}
              />

              {/* Close Button */}
              <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    minHeight: '50%',
    maxHeight: '80%',
    minWidth: "80%",
    maxWidth: "90%",
    borderRadius: 30,
    padding: '5%',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: colors.dark,
    borderRadius: borderRadius * 0.4,
    padding: 8,
    marginBottom: 16,
  },
  listItem: {
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.grey,
  },
  itemText: {
    fontSize: size.text,
    color: colors.dark,
  },
  closeButton: {
    height: "10%",
    width: "88%",
    backgroundColor: colors.light,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  closeButtonText: {
    fontSize: size.label,
    color: colors.red,
  },
});

export default SelectOption;