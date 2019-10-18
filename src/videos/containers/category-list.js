import React, { Component } from 'react';
import { View, FlatList, } from 'react-native';
import Layout from '../components/category-list-layout';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';
import Category from '../components/category';
import { connect } from 'react-redux';
import { NavigationActions } from "react-navigation";

function mapStateToProps(state) {
    return {
        list: state.videos.categoryList
    };
}

class CategoryList extends Component {
    keyExtractor = item => item.id.toString()
    renderEmpty = () => <Empty text="No hay categorias :("></Empty>
    itemSeparator = () => <Separator />
    viewCategory = (item) => {
        this.props.dispatch(
            NavigationActions.navigate({
                routeName: "Category",
                params: {
                    genre: item.genres[0]
                }
            })
        )
    }
    renderItem = ({ item }) => {
        return(
            item.genres && (
                <Category
                    {...item}
                    onPress={() => {this.viewCategory(item)}}
                />
            )
        )
    }
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

export default connect(mapStateToProps)(CategoryList);