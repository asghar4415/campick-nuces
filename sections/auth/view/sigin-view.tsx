'use client';

import UserAuthForm from '../user-auth-form';
import Image from 'next/image'; // Import the Image component
import MainLogo from '@/public/campick-new-logo-white.svg';
import MainLogoBlack from '@/public/campick-new-logo.svg';
import { useRouter } from 'next/navigation';

export default function SignInViewPage() {
  const router = useRouter();
  return (
    <div className="relative min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Image
            className="hover:cursor-pointer"
            onClick={() => router.push('/')}
            src={MainLogo}
            alt="CamPick Logo"
            width={200}
            height={150}
          />
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <h2>
              "First time here? Students and Faculty, please log in using
              Google(nu.edu.pk id) to get started."
            </h2>
            <br />
            <p className="text-lg">
              Welcome to CamPick! Sign up or log in to explore products, manage
              orders, and enjoy a seamless shopping experience. Whether you’re a
              customer looking to shop or a shop owner managing your business,
              our platform provides all you need in one convenient place.
            </p>
          </blockquote>
        </div>
      </div>
      <div className="flex min-h-screen items-center px-6 py-10 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
          <div className="space-y-6 rounded-lg border bg-card p-8 text-card-foreground shadow-sm lg:hidden">
            <div className="align-items-center mb-8 flex flex-col justify-center space-y-4 text-center">
              <div className="relative z-20 mx-auto flex items-center text-lg font-medium">
                <Image
                  onClick={() => router.push('/')}
                  className="hover:cursor-pointer"
                  src={MainLogoBlack}
                  alt="CamPick Logo"
                  width={180}
                  height={110}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-center text-2xl font-semibold tracking-tight">
                Sign in to your account
              </h1>
              <p className="text-center text-sm text-muted-foreground">
                Enter your email and password
              </p>

              <UserAuthForm />
            </div>
          </div>

          <div className="hidden space-y-6 lg:block">
            <h1 className="text-center text-2xl font-semibold tracking-tight">
              Sign in to your account
            </h1>
            <p className="text-center text-sm text-muted-foreground">
              Enter your email and password
            </p>

            <UserAuthForm />
          </div>
        </div>
      </div>
    </div>
  );
}
