"use client";

import dynamic from 'next/dynamic';
import type { ComponentProps } from 'react';
import type Chatbot from './chatbot';

type ChatbotProps = ComponentProps<typeof Chatbot>;

const LazyChatbot = dynamic<ChatbotProps>(
    () => import('./chatbot'),
    {
        ssr: false,
        loading: () => null,
    }
);

export default function ChatbotClient(props: ChatbotProps) {
    return <LazyChatbot {...props} />;
}
