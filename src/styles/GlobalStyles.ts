// src/styles/GlobalStyles.ts
import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20, // Add margin if needed
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%', // Adjust width as needed
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
