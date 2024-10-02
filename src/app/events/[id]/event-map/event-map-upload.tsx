"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function EventMapUpload() {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(
    "/event-map.png"
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        setImage(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        toast.error("Por favor, selecione um arquivo de imagem.");
        setImage(null);
        setImagePreview(null);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (image) {
      console.log("Uploading image:", image.name);
    } else {
      toast.error("Por favor, selecione um arquivo de imagem.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="aspect-video w-full bg-card rounded-lg overflow-auto">
        {imagePreview ? (
          <img src={imagePreview} alt="" className="min-w-full min-h-full" />
        ) : (
          <div className="size-full flex items-center justify-center">
            <p className="text-muted-foreground">Nenhum mapa selecionado</p>
          </div>
        )}
      </div>
      <footer className="flex items-center justify-between">
        <Input
          id="imageUpload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
        <Label
          htmlFor="imageUpload"
          className={buttonVariants({ variant: "outline", className: "cursor-pointer" })}
        >
          <UploadIcon className="mr-2 h-4 w-4" />
          Adicionar mapa
        </Label>
        <Button type="submit" disabled={!image}>
          Salvar alterações
        </Button>
      </footer>
    </form>
  );
}
