
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from 'next/link';

export default function MyPage() {
    const { isLoggedIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn) {
            router.push('/login');
        }
    }, [isLoggedIn, router]);

    if (!isLoggedIn) {
        return null; 
    }

    return (
        <div className="container mx-auto py-10 px-4 md:px-6">
            <header className="mb-8">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">My Page</h1>
                <p className="text-lg text-muted-foreground mt-2">Manage your account settings and information.</p>
            </header>

            <div className="grid gap-8 md:grid-cols-3">
                <div className="md:col-span-1">
                    <Card>
                        <CardHeader className="items-center text-center">
                            <Avatar className="w-24 h-24 mb-4">
                                <AvatarImage src="https://placehold.co/128x128.png" alt="User Name" data-ai-hint="user portrait" />
                                <AvatarFallback>USER</AvatarFallback>
                            </Avatar>
                            <CardTitle>USER_ID</CardTitle>
                            <CardDescription>user.email@example.com</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <Button className="w-full">Change Profile Picture</Button>
                        </CardContent>
                    </Card>
                </div>

                <div className="md:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Account Information</CardTitle>
                            <CardDescription>Update your personal details.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="id">ID</Label>
                                <Input id="id" defaultValue="USER_ID" readOnly />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" defaultValue="user.email@example.com" />
                            </div>
                            <Button>Update Information</Button>
                            
                            <Separator />

                            <div>
                                <h3 className="text-lg font-semibold mb-2">Change Password</h3>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="current-password">Current Password</Label>
                                        <Input id="current-password" type="password" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="new-password">New Password</Label>
                                        <Input id="new-password" type="password" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                                        <Input id="confirm-password" type="password" />
                                    </div>
                                     <Button>Change Password</Button>
                                </div>
                            </div>

                             <Separator />

                             <div>
                                <h3 className="text-lg font-semibold mb-2">Support & Legal</h3>
                                <div className="space-y-2 text-sm">
                                    <p>
                                        For any inquiries, please contact the management team at{' '}
                                        <a href="mailto:support@lablustre.com" className="text-primary underline">
                                            support@lablustre.com
                                        </a>.
                                    </p>
                                    <Link href="#" className="text-primary underline">
                                        Privacy Policy
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
