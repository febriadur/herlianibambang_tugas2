import { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  Image,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';

interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const products = [
      {
        id: 1,
        name: 'sepatu',
        price: 100,
        photo:
          'https://id-test-11.slatic.net/p/aa214db6060d8881bb354de0e8141481.jpg',
      },
      {
        id: 2,
        name: 'sepatu',
        price: 117,
        photo:
          'https://cdn.keepo.me/images/post/lists/2020/04/14/main-list-image-57c5bd87-2002-4e8f-ba99-31e75330ad62-5.jpg',
      },
      {
        id: 3,
        name: 'sepatu',
        price: 190,
        photo:
          'https://s1.bukalapak.com/img/6525460421/large/Macbeth_Shoes__sepatu_cowok__kado_cowok__sepatu_fitness__sne.png',
      },
      {
        id: 4,
        name: 'sepatu',
        price: 199,
        photo:
          'https://id-test-11.slatic.net/p/436fd1fddc0cd01bf8c22c226c543f8d.jpg',
      },
      {
        id: 5,
        name: 'sepatu',
        price: 100,
        photo:
          'https://s2.bukalapak.com/img/7089596161/w-1000/Sepatu_Sneakers_Wanita_Putih_Bolong_Samping.jpg',
      },
      {
        id: 6,
        name: 'sepatu',
        price: 140,
        photo:
          'https://cf.shopee.co.id/file/c023cd193d5b5219c03a68e55e492a67',
      },
      {
        id: 7,
        name: 'sepatu',
        price: 150,
        photo:
          'https://cf.shopee.co.id/file/b01dcadaff33732c05b2c1513f77d942',
      },
      {
        id: 8,
        name: 'sepatu',
        price: 150,
        photo:
          'https://cf.shopee.co.id/file/ea802a5209099f844895cf17e2325f7f',
      },
      
    ];
    setProducts(products);
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={{ padding: 10 }}>
        <FlatList
          data={products}
          numColumns={2}
          ListHeaderComponent={() => (
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                marginTop: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Toko Sepatu Nona Sumba
            </Text>
          )}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: 'white',
                maxWidth: '50%',
                maxHeight: 400,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 20,
                padding: 20,
                borderRadius: 10,
                borderWidth: 2,
                shadowRadius: 5,
              }}>
              <Image
                source={{ uri: item.photo }}
                style={{ width: 90, height: 100, borderRadius: 5 }}
              />
              <Text style={{ paddingVertical: 20 }}>{item.name}</Text>
              <Text style={{ paddingBottom: 20 }}>Price: ${item.price}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;