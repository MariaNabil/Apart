import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {lightGray} from '../../constants/Colors';
import {postImages, userImages} from '../../constants/Images';
import ItemSeparator from '../../partial-components/ItemSeparator';

export default LatestNews = props => {
  let posts = [
    {Id: 0, UserName: 'Bernard Alvarado', UserImage: 0, ImageId: 0, Hours: 2},
    {Id: 1, UserName: 'Jessi Dingdong', UserImage: 1, ImageId: 1, Hours: 8},
  ];

  const renderItem = ({item}) => {
    const {UserName, UserImage, ImageId, Hours} = item;
    return (
      <View style={{paddingVertical: 20}}>
        <View
          style={{
            flexDirection: 'row',
            paddingBottom: 10,
            alignItems: 'center',
          }}>
          <Image
            style={{width: 50, height: 50, borderRadius: 25, marginRight: 10}}
            source={userImages[UserImage].path}
          />
          <View>
            <Text>{UserName}</Text>
            <Text style={{color: lightGray}}>{`${Hours} hours`}</Text>
          </View>
        </View>

        <Image
          style={{width: '100%', height: 150, borderRadius: 25}}
          source={postImages[ImageId].path}
          resizeMode={'stretch'}
        />
      </View>
    );
  };

  return (
    <View style={{paddingHorizontal: 20}}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.Id}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};
