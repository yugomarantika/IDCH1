import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import Example from './Example'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'




export default class Home extends React.Component {
  render() {
    return (
      <ScrollView >
        <View style={{ justifyContent: 'center' }}>
          <Text style={styles.product}>My Products & Services</Text>
          <Text style={styles.domain}>My Domains</Text>
          <Example />
          <View style={styles.view}>
            <Text style={{ color: '#838A93', fontSize: 18 }}>View All </Text>
            <View style={styles.drop}>
              <FontAwesome5 name="caret-down" color='#838A93' />
            </View>
          </View>
          <View style={styles.pro}>
            <Text style={styles.produck}>Produck/Service</Text>
            <Text style={styles.status}>Status</Text>
          </View>
          <View style={[styles.card, styles.shadowProp]}>
            <View>
              <Text style={styles.heading}>
                Cloud Hosting Cpanel Business..
              </Text>
              <Text style={styles.title}>
                Jeni-Roxy.Com
              </Text>
            </View>
            <View style={styles.harga}>
              <Text style={styles.angka}>Rp 360,000</Text>
              <Text style={styles.hari}>Thu</Text>
              <Text style={styles.tanggal}>1-14-2016</Text>
            </View>
          </View>

          <View style={[styles.card, styles.shadowProp]}>
            <View>
              <Text style={styles.heading}>
                Cloud Hosting Cpanel Business..
              </Text>
              <Text style={styles.title}>
                Jeni-Roxy.Com
              </Text>
            </View>
            <View style={styles.harga}>
              <Text style={styles.angka}>Rp 360,000</Text>
              <Text style={styles.hari}>Thu</Text>
              <Text style={styles.tanggal}>1-14-2016</Text>
            </View>
          </View>

          <View style={[styles.card, styles.shadowProp]}>
            <View>
              <Text style={styles.heading}>
                Cloud Hosting Cpanel Business..
              </Text>
              <Text style={styles.title}>
                Jeni-Roxy.Com
              </Text>
            </View>
            <View style={styles.harga}>
              <Text style={styles.angka}>Rp 360,000</Text>
              <Text style={styles.hari}>Thu</Text>
              <Text style={styles.tanggal}>1-14-2016</Text>
            </View>
          </View>

          <View style={[styles.card, styles.shadowProp]}>
            <View>
              <Text style={styles.heading}>
                Cloud Hosting Cpanel Business..
              </Text>
              <Text style={styles.title}>
                Jeni-Roxy.Com
              </Text>
            </View>
            <View style={styles.harga}>
              <Text style={styles.angka}>Rp 360,000</Text>
              <Text style={styles.hari}>Thu</Text>
              <Text style={styles.tanggal}>1-14-2016</Text>
            </View>
          </View>

          <View style={[styles.card, styles.shadowProp]}>
            <View>
              <Text style={styles.heading}>
                Cloud Hosting Cpanel Business..
              </Text>
              <Text style={styles.title}>
                Jeni-Roxy.Com
              </Text>
            </View>
            <View style={styles.harga}>
              <Text style={styles.angka}>Rp 360,000</Text>
              <Text style={styles.hari}>Thu</Text>
              <Text style={styles.tanggal}>1-14-2016</Text>
            </View>
          </View>



        </View>
      </ScrollView>
    )
  }

}
const styles = StyleSheet.create({
  product: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 30,
    lineHeight: 32,
    width: 190,
    height: 58,
    paddingLeft: 25,
    paddingTop: 10,
    color: '#000000'
  },
  domain: {
    fontStyle: 'normal',
    fontSize: 22,
    fontWeight: '400',
    paddingTop: 20,
    paddingLeft: 25,
    color: '#000000'
  },

  view: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingTop: 54,

  },

  drop: {
    paddingTop: 4,
    paddingLeft: 10
  },
  pro: {
    paddingLeft: 28,
    paddingTop: 20,
    paddingBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  produck: {
    color: '#838A93',
    fontSize: 18,
  },
  status: {
    color: '#838A93',
    fontSize: 18,
    paddingLeft: 183,
    paddingRight: 28
  },
  heading: {
    width: 200,
    fontSize: 21,
    fontWeight: '400',
    lineHeight: 32,
    paddingTop: 20,
    paddingLeft: 60

  },
  title: {
    paddingTop: 10,
    fontSize: 16,
    color: '#0075FF',
    paddingBottom: 10,
    paddingLeft: 60
  },

  harga: {
    paddingTop: 20,
    alignItems: 'center',
    paddingRight: 55,
    fontSize: 18
  },

  angka: {
    fontSize: 18
  },
  hari: {
    fontSize: 18,
    paddingTop: 15
  },
  tanggal: {
    fontSize: 18,
    paddingTop: 3
  },

  card: {
    marginBottom: 12,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 438,
    height: 130,
    marginLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 5,
    shadowRadius: 3,
  },
});