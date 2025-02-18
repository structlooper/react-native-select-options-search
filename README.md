# react-native-select-options-search

Effortlessly manage large datasets and enable seamless search functionality for option selection in React Native applications. With features inspired by web lazy-loading, this package is perfect for handling extensive options efficiently.

---
<p align="center">
  <a href="https://www.npmjs.com/package/react-native-select-options-search">
    <img src="https://img.shields.io/npm/v/react-native-select-options-search?color=brightgreen&label=npm&logo=npm" alt="npm version" />
  </a>
  <a href="https://github.com/structlooper/react-native-select-options-search/issues">
    <img src="https://img.shields.io/github/issues/structlooper/react-native-select-options-search?color=yellow&label=issues&logo=github" alt="GitHub issues" />
  </a>
  <a href="https://github.com/structlooper/react-native-select-options-search">
    <img src="https://img.shields.io/github/stars/structlooper/react-native-select-options-search?color=blue&label=GitHub%20Stars&logo=github" alt="GitHub stars" />
  </a>
  <a href="https://github.com/structlooper/react-native-select-options-search/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/structlooper/react-native-select-options-search?color=blue&label=License" alt="License" />
  </a>
  <a href="https://www.npmjs.com/package/react-native-select-options-search">
    <img src="https://img.shields.io/npm/dt/react-native-select-options-search?color=purple&label=Downloads&logo=npm" alt="npm downloads" />
  </a>
</p>

## **Features**
- 🌟 **Optimized for Large Datasets**: Smoothly handle expensive options selection with lazy-loading.
- 🔍 **Search Functionality**: Quickly search and filter options for better user experience.
- ⚡ **Lightweight**: Minimal impact on performance while handling heavy data.
- 🖼️ **Designed for Mobile**: Built specifically for React Native to ensure responsiveness.

---

## **Installation**

Install the package via npm:

```bash
npm install react-native-select-options-search

```
## **Usage**
Here’s an example to get you started:

```javascript
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Styles } from '../utils/styles';
import SelectOption from 'react-native-select-options-search';

const Playground = () => {
  const [selectedFruit, setSelectedValue] = useState(null);

  return (
    <View style={{ padding: '5%' }}>
      <View style={{ marginVertical: '10%' }}>
        <Text style={Styles.headerTitleDark}>React-Native-select-options-search</Text>
        <Text style={Styles.commonTitleDark}>@demo by #structlooper</Text>
      </View>
      
      <SelectOption
        placeHolder={"Select fruit"}
        listItems={[
          { id: 1, name: 'apple' },
          { id: 2, name: 'mango' },
          { id: 3, name: 'banana' },
          { id: 4, name: 'orange' },
          { id: 5, name: 'grape' },
          { id: 6, name: 'kiwi' },
          { id: 7, name: 'pear' },
          { id: 8, name: 'peach' },
          { id: 9, name: 'pineapple' },
          { id: 10, name: 'strawberry' }
        ]}
        selectedValueState={{ state: selectedFruit, setState: setSelectedValue }}
      />
    </View>
  );
};

export default Playground;
```
![Demo GIF](./includes/react-native-select-options-search%20sample.gif)

## **Dependencies**
- **React**: Peer dependency required to integrate seamlessly with React Native.
- **React Native**: Ensure your project is using React Native as this package is tailored for it.

## **License**

This project is licensed under the MIT License. See the [LICENSE](https://opensource.org/licenses/MIT) file for details.

---

## **Contributing**

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/structlooper/react-native-select-options-search/issues).

---

## **Contact**

For support, feedback, or contributions, reach out via GitHub: [structlooper](https://github.com/structlooper).

