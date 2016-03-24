
var React = require('react-native');
var { NativeModules, Text } = React;
var {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  PixelRatio,
  Component,
} = React;


var Parallax = require('react-native-parallax');

var IMAGE_WIDTH = Dimensions.get('window').width;
var IMAGE_HEIGHT = IMAGE_WIDTH / 2;
var PIXEL_RATIO = PixelRatio.get();
var PARALLAX_FACTOR = 0.3;


var SECTIONS = [
  {
    title: 'RECETTE',
    keyword : 'test',
  },
  {
    title: 'ALÉATOIRE',
    keyword: 'pizza2.jpg',
  },
  {
    title: 'AUTO-FINDER',
    keyword: 'monkey',
  },
  {
    title: 'FAVORI',
    keyword: 'penguin',
  },
  {
    title: 'CREDITS',
    keyword: 'sheep',
  },
  
];


class Example extends React.Component{
   constructor(props) {
    super(props); 
    this.state = {
      movies: null,
    };
    }
    
    componentDidMount() {
    }
    render(){
    return (
      <Parallax.ScrollView style={styles.scrollView}>

        <Parallax.Image
          style={styles.image}
          overlayStyle={styles.overlay}
          source={require('./../drawable/menu0.jpg')}
          parallaxFactor={PARALLAX_FACTOR}
        >
          
          <Text style={styles.title}>{SECTIONS[0].title}</Text>
        </Parallax.Image>
        
        <Parallax.Image
          style={styles.image}
          overlayStyle={styles.overlay}
          source={require('./../drawable/menu1.jpg')}
          parallaxFactor={PARALLAX_FACTOR}
        >
          
          <Text style={styles.title}>{SECTIONS[1].title}</Text>
        </Parallax.Image>
          
        <Parallax.Image
          style={styles.image}
          overlayStyle={styles.overlay}
          source={require('./../drawable/menu2.jpg')}
          parallaxFactor={PARALLAX_FACTOR}
        >
          
          <Text style={styles.title}>{SECTIONS[2].title}</Text>
        </Parallax.Image>
          
        <Parallax.Image
          style={styles.image}
          overlayStyle={styles.overlay}
          source={require('./../drawable/menu3.jpg')}
          parallaxFactor={PARALLAX_FACTOR}
        >
          
          <Text style={styles.title}>{SECTIONS[3].title}</Text>
        </Parallax.Image>
        <Parallax.Image
          style={styles.image}
          overlayStyle={styles.overlay}
          source={require('./../drawable/menu4.jpg')}
          parallaxFactor={PARALLAX_FACTOR}
        >
          
          <Text style={styles.title}>{SECTIONS[4].title}</Text>
        </Parallax.Image>
      </Parallax.ScrollView>
    );
  }
   
  
}

var styles = StyleSheet.create({
  image: {
    height: IMAGE_HEIGHT,
  },
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 25,
    fontWeight: 'bold',
    color: 'white',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1,
    shadowColor: 'black',
    shadowOpacity: 0.8,
  },
  url: {
    opacity: 0.5,
    fontSize: 10,
    position: 'absolute',
    color: 'white',
    left: 5,
    bottom: 5,
  }
});


module.exports = Example;


