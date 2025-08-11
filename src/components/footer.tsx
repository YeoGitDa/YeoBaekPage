import Link from "next/link";
import Logo from "./logo";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Send } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-card text-card-foreground border-t">
            <div className="container mx-auto py-12 px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-12">
                    <div className="md:col-span-3 space-y-4">
                        <Logo />
                        <p className="text-sm text-muted-foreground">
                            Pioneering the future of scientific research and discovery.
                        </p>
                    </div>
                    <div className="md:col-span-2">
                        <h4 className="font-semibold mb-4">LABs</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/lab/1" className="text-muted-foreground hover:text-primary">LAB 1</Link></li>
                            <li><Link href="/lab/2" className="text-muted-foreground hover:text-primary">LAB 2</Link></li>
                            <li><Link href="/lab/3" className="text-muted-foreground hover:text-primary">LAB 3</Link></li>
                            <li><Link href="/lab/4" className="text-muted-foreground hover:text-primary">LAB 4</Link></li>
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                         <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                            <li><Link href="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary">Careers</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>
                     <div className="md:col-span-2">
                         <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div className="md:col-span-3">
                        <h4 className="font-semibold mb-4">Stay Updated</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                            Subscribe to our newsletter for the latest updates.
                        </p>
                        <form className="flex space-x-2">
                            <Input type="email" placeholder="Enter your email" className="flex-1" />
                            <Button type="submit">
                                <Send className="h-4 w-4" />
                                <span className="sr-only">Subscribe</span>
                            </Button>
                        </form>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} LabLustre. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
