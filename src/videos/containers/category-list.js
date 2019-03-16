import React, { Component } from 'react';
import { View, FlatList, } from 'react-native';
import Layout from '../components/category-list-layout';
import Empty from '../components/Empty';
import Separator from '../../sections/components/horizontal-separator';
import Category from '../components/category';

class CategoryList extends Component {
    keyExtractor = item => item.id.toString()
    renderEmpty = () => <Empty text="No hay categorias :("></Empty>
    itemSeparator = () => <Separator />
    renderItem = ({ item }) => <Category {...item} />
    render() {
        return (
            <Layout title='Categorías'>
                <FlatList
                    horizontal
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

export default CategoryList