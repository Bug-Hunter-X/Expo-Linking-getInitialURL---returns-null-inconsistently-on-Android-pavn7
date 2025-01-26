```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrl = async () => {
      const url = await Linking.getInitialURL();
      setInitialUrl(url);
    };

    const handleDeepLink = (event) => {
        setInitialUrl(event.url)
    }

    Linking.addEventListener('url', handleDeepLink);
    handleUrl();
    return () => Linking.removeEventListener('url', handleDeepLink);
  }, []);

  return (
    <View>
      {initialUrl && <Text>Initial URL: {initialUrl}</Text>}
    </View>
  );
}

export default App;
```