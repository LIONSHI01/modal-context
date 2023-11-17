import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { env } from '@/env.mjs';

export default function Home() {
  return (
    <div>
      <Button>New</Button>
    </div>
  );
}
