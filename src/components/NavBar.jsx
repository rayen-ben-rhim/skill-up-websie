import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavBar = () => {
  const courseItems = [
    {
      title: "Web Development",
      description: "Learn modern web development techniques",
    },
    {
      title: "Data Science",
      description: "Master data analysis and visualization",
    },
    {
      title: "Mobile Development",
      description: "Build iOS and Android applications",
    },
    {
      title: "Cloud Computing",
      description: "Learn AWS, Azure, and GCP",
    },
  ];

  const flashSaleItems = [
    {
      title: "Python Masterclass",
      discount: "50% off - Ends in 2 days",
    },
    {
      title: "JavaScript Bundle",
      discount: "40% off - Ends in 5 days",
    },
  ];

  const DesktopNav = () => (
    <div className="hidden lg:flex space-x-4 items-center ">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
            <NavigationMenuContent className="min-w-[400px] p-4">
              <div className="grid gap-4">
                <div className="font-medium text-lg">Popular Courses</div>
                <div className="grid grid-cols-2 gap-4">
                  {courseItems.map((item, index) => (
                    <div key={index} className="p-2 rounded hover:bg-slate-100">
                      <div className="font-medium">{item.title}</div>
                      <p className="text-sm text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Flash Sale</NavigationMenuTrigger>
            <NavigationMenuContent className="min-w-[300px] p-4">
              <div className="grid gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="text-red-600 font-bold mb-2">
                    Limited Time Offers!
                  </div>
                  <div className="space-y-3">
                    {flashSaleItems.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white p-2 rounded shadow-sm"
                      >
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-slate-500">
                          {item.discount}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button variant="ghost">Bootcamps</Button>
      <Button variant="ghost">Learning Flow</Button>
      <Button variant="ghost">Contact us</Button>
      <Button variant="ghost">Blog</Button>
    </div>
  );

  const MobileNav = () => (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="py-4">
          <Accordion type="single" collapsible className="w-full bg-black">
            <AccordionItem value="courses">
              <AccordionTrigger>Courses</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {courseItems.map((item, index) => (
                    <div key={index} className="p-2 rounded hover:bg-slate-100">
                      <div className="font-medium">{item.title}</div>
                      <p className="text-sm text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="flash-sale">
              <AccordionTrigger>Flash Sale</AccordionTrigger>
              <AccordionContent>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="text-red-600 font-bold mb-2">
                    Limited Time Offers!
                  </div>
                  <div className="space-y-3">
                    {flashSaleItems.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white p-2 rounded shadow-sm"
                      >
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-slate-500">
                          {item.discount}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="quick-links">
              <AccordionTrigger>Quick Links</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    Bootcamps
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Learning Flow
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Contact us
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Blog
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <Button
          variant="ghost"
          className="bg-[#E1F396] px-[48px] py-[12px] rounded-[100px] h-[50px]"
        >
          Get Started
        </Button>
      </SheetContent>
    </Sheet>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md flex justify-between items-center p-4 ">
      <div className="flex-shrink-0">
        <Link href="/">
          <Image src={Logo} width={80} height={80} alt="Company Logo" />
        </Link>
      </div>
      <DesktopNav />
      <MobileNav />
      <Button
        variant="ghost"
        className="hidden lg:block max-w-[200px] bg-[#E1F396] px-[24px] py-[8px] rounded-[100px] h-[40px] text-sm"
      >
        Get Started
      </Button>
    </div>
  );
};

export default NavBar;
