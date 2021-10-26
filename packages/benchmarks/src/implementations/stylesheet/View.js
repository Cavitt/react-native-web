import React from 'react';
import { StyleSheet } from 'react-native-web';

function View(props) {
  const [className, inlineStyle] = StyleSheet([styles.root$raw, props.style]);
  return <div {...props} className={className} style={inlineStyle} />;
}

const styles = StyleSheet.create({
  root$raw: {
    alignItems: 'stretch',
    borderWidth: 0,
    borderStyle: 'solid',
    boxSizing: 'border-box',
    display: 'flex',
    flexBasis: 'auto',
    flexDirection: 'column',
    flexShrink: 0,
    margin: 0,
    padding: 0,
    position: 'relative',
    // fix flexbox bugs
    minHeight: 0,
    minWidth: 0
  }
});

export default View;
