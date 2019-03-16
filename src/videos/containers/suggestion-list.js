import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/Empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component {
    keyExtractor = item => item.id.toString()
    renderEmpty = () => <Empty text="No hay sugerencias :("></Empty>
    itemSeparator = () => <Separator />
    renderItem = ({item}) => <Suggestion {...item} />
    render() {
        return (
            <Layout title="Recomendado para tí">
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem}
                />
            </Layout>
        )
    }
}

export default SuggestionList;