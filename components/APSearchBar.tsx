import { Searchbar } from "react-native-paper";
import { StyleSheet } from 'react-native'
import { useState } from "react";

export default function APSearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <Searchbar
        placeholder="Search AlphabetPharma"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.container}
      />
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingHorizontal: 6
    }
})