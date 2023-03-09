import React from 'react';
import { View, Video } from 'react-native';

export function MyVideoPlayer() {
  return (
    <View style={{ flex: 1 }}>
      <Video
        source={{ uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
        style={{ flex: 1 }}
        controls={true}
      />
    </View>
  );
}

