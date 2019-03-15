import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/Empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component {
    renderEmpty = () => <Empty text="No hay sugerencias :("></Empty>
    itemSeparator = () => <Separator />
    renderItem = ({item}) => <Suggestion {...item} />
    render() {
        const list = [
            {
                title: 'Avengers',
                key: '1'
            },
            {
                title: 'Pokemon',
                key: '2'
            }
        ]
        return (
            <Layout title="Recomendado para tí">
                <FlatList
                    data={list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem}
                />
            </Layout>
        )
    }
}

export default SuggestionList;