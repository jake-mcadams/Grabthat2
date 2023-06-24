// components/Chat.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

interface ChatProps {
  // Add any necessary props for the Chat component
}

const Chat: React.FC<ChatProps> = (): JSX.Element => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setChatHistory((prevChatHistory) => [...prevChatHistory, message]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        {chatHistory.map((chatMessage, index) => (
          <Text key={index} style={styles.chatMessage}>
            {chatMessage}
          </Text>
        ))}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message..."
          autoCapitalize="none"
          returnKeyType="send"
          onSubmitEditing={handleSendMessage}
        />

        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  chatContainer: {
    flex: 1,
  },
  chatMessage: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    paddingTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 5,
    paddingLeft: 10,
    marginRight: 10,
  },
  sendButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#7851A9',
    borderRadius: 5,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Chat;
