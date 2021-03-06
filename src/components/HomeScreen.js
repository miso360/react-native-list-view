import React,{ Component } from 'react';
import {TabBarIOS, Text} from 'react-native';
import ItemList from './ItemList';
import ItemList2 from './ItemList2';
//import Users from './Users';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'itemList'
        };
    }

    render() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    systemIcon={'featured'}
                    selected={this.state.tab === 'itemList'}
                >
                   <ItemList/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon={"search"}
                    selected={this.state.tab === 'search'}
                >
                    <ItemList2/>
                </TabBarIOS.Item>                
                <TabBarIOS.Item
                    badge={3}
                    systemIcon={'bookmarks'}
                    selected={this.state.tab === 'bookmarks'}
                >
                    
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}