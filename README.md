# StiftelseGuiden.se - AI-Powered Foundation Guide

A sophisticated AI-powered platform providing expert guidance on Swedish foundations (stiftelser). Built with React, TypeScript, and Tailwind CSS, featuring a modern chat interface and comprehensive foundation directory.

![StiftelseGuiden.se](https://i.imgur.com/9ScyPiD.jpeg)

## 🚀 Features

- **AI Chat Interface**: Real-time AI assistance for foundation-related queries
- **Foundation Directory**: A-Ö listing of Swedish foundations
- **GDPR Compliant**: Zero data storage, immediate session cleanup
- **Responsive Design**: Fully responsive UI with backdrop blur effects
- **SEO Optimized**: Comprehensive meta tags and structured data

## 🛠️ Tech Stack

- React 18.3
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons

## 🔧 Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/stiftelseguiden.git
cd stiftelseguiden
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

## 🔌 API Integration Points

### Chat AI Integration
The chat interface in `src/components/ChatInterface.tsx` is prepared for AI integration:

```typescript
// Replace the mock response with your AI service
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!input.trim()) return;

  // 1. Add your AI service endpoint
  const AI_ENDPOINT = 'your-ai-service-endpoint';

  // 2. Configure your AI service credentials
  const AI_CONFIG = {
    apiKey: process.env.AI_API_KEY,
    // Add other necessary configuration
  };

  // 3. Make the API call
  try {
    const response = await fetch(AI_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AI_CONFIG.apiKey}`
      },
      body: JSON.stringify({ prompt: input })
    });
    
    const data = await response.json();
    // Handle the AI response
  } catch (error) {
    console.error('AI Service Error:', error);
  }
};
```

### Foundation Directory Integration
The directory component in `src/components/Directory.tsx` can be connected to a foundation database:

```typescript
// Add your foundation data service
interface Foundation {
  id: string;
  name: string;
  category: string;
  description: string;
}

// Fetch foundations by letter
async function getFoundationsByLetter(letter: string): Promise<Foundation[]> {
  const endpoint = `your-api-endpoint/foundations?letter=${letter}`;
  const response = await fetch(endpoint);
  return response.json();
}
```

## 📁 Project Structure

```
stiftelseguiden/
├── src/
│   ├── components/
│   │   ├── ChatInterface.tsx   # AI chat implementation
│   │   ├── Directory.tsx       # A-Ö foundation listing
│   │   ├── Footer.tsx          # Site footer
│   │   └── Header.tsx          # Site header
│   ├── App.tsx                 # Main application component
│   ├── main.tsx               # Application entry point
│   └── index.css              # Global styles
├── public/                    # Static assets
├── index.html                # HTML template
└── package.json              # Project dependencies
```

## 🔒 Security & GDPR

The application is designed with privacy and security in mind:

- No cookies or local storage usage
- No user data persistence
- Encrypted communication
- Immediate session cleanup
- GDPR compliant by design

## 🤝 Integration Partners

- [HEIMLANDR.IO](https://heimlandr.io) - AI Technology Provider
- [sokastiftelsemedel.se](https://www.sokastiftelsemedel.se) - Foundation Database & Services

## 🚀 Deployment

Build the project:
```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to your preferred hosting service.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to our repository.

## 📞 Support

For technical support, please contact HEIMLANDR.IO. For foundation-related inquiries, visit sokastiftelsemedel.se.