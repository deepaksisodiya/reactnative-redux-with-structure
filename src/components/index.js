/**
 * Created by deepaksisodiya on 16/12/15.
 */


import React from 'react-native';

var {
  Text,
  View,
  TouchableHighlight,
  } = React;

var counter = require('./../reducer/counter');

var createStore = require('redux').createStore;

var store = createStore(counter);

var counterActions = require('./../actions/counterActions');

var Counter = React.createClass({

  getInitialState: function () {
    return {
      value: store.getState()
    }
  },

  componentDidMount: function() {
    store.subscribe(() => this.setCounter(store.getState()));
  },

  setCounter : function(counter){
    this.setState({
      value : counter
    });
  },

  render: function() {
    return (
      <View>
        <Text>{ this.state.value }</Text>
        <TouchableHighlight onPress={this.increment}>
          <Text>Increment</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.decrement}>
          <Text>Decrement</Text>
        </TouchableHighlight>
      </View>
    )
  },

  increment: function () {
    store.dispatch(counterActions.increment());
  },

  decrement: function () {
    store.dispatch(counterActions.decrement());
  }

});

module.exports = Counter;
