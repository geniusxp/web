import { Header } from "@/components/app/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { speakers } from "@/lib/mocks";
import { PlusIcon, SearchIcon } from "lucide-react";

export default function SpeakersPage() {
  return (
    <main className="flex-1">
      <Header eventName="FIAP Next 2024" pageName="Speakers" />

      <div className="p-4 grid gap-4 animate-in slide-in-from-bottom-8 fade-in duration-1000">
        <div className="flex items-center justify-between gap-4 md:gap-8 max-sm:flex-col">
          <div className="relative">
            <Input placeholder="Buscar pelo nome..." className="max-w-80 w-full" />
            <SearchIcon className="absolute top-1/2 right-4 transform -translate-y-1/2 size-4 text-muted-foreground" />
          </div>
          <Button>
            <PlusIcon className="size-4 mr-2" />
            Adicionar speaker
          </Button>
        </div>
        <div className="rounded-md border w-full overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16"></TableHead>
                <TableHead className="w-56">Nome</TableHead>
                <TableHead className="min-w-72">Bio</TableHead>
                <TableHead className="text-center">Nacionalidade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-card">
              {speakers.map(
                ({ name, id, avatar, bio, nationality: Nationality }) => (
                  <TableRow key={id} className="relative">
                    <TableCell>
                      <Avatar>
                        <AvatarImage src={avatar} alt={name} />
                        <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                    </TableCell>
                    <TableCell className="font-medium">{name}</TableCell>
                    <TableCell className="text-xs font-normal opacity-90">
                      {bio}
                    </TableCell>
                    <TableCell>
                      <Nationality className="rounded h-5 mx-auto" />
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
