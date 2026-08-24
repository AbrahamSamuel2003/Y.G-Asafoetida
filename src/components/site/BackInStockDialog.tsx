import { useState, type FormEvent } from "react";
import { BellRing, Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useWishlist } from "@/lib/wishlist";

const CONTACT_RE = /^(\S+@\S+\.\S+|[6-9]\d{9})$/;

/** "Notify me" capture for sold-out products. Accepts an email or a 10-digit mobile. */
export function BackInStockDialog({
  slug,
  name,
  className,
}: {
  slug: string;
  name: string;
  className?: string;
}) {
  const { addAlert, hasAlert } = useWishlist();
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState("");
  const [touched, setTouched] = useState(false);
  const [saving, setSaving] = useState(false);

  const invalid = !CONTACT_RE.test(contact.trim());
  const registered = hasAlert(slug);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (invalid) return;
    setSaving(true);
    await new Promise((r) => setTimeout(r, 450));
    addAlert(slug, contact.trim());
    setSaving(false);
    setOpen(false);
    setContact("");
    setTouched(false);
    toast.success("We'll tell you the moment it's back", {
      description: `${name} — one message only, no marketing.`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={registered ? "outline" : "default"} className={className} size="lg">
          {registered ? (
            <>
              <Check className="mr-2 h-4 w-4" /> Alert set
            </>
          ) : (
            <>
              <BellRing className="mr-2 h-4 w-4" /> Notify me when back
            </>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Tell me when it's back</DialogTitle>
          <DialogDescription>
            {name} is being packed in the next batch. Leave an email or mobile number and we'll
            send exactly one message when it returns.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-2">
          <Label htmlFor="stock-contact">Email or mobile number</Label>
          <Input
            id="stock-contact"
            value={contact}
            autoComplete="email"
            onChange={(e) => setContact(e.target.value)}
            onBlur={() => setTouched(true)}
            aria-invalid={touched && invalid}
            placeholder="Enter your email or mobile number"
          />
          {touched && invalid ? (
            <p className="text-sm text-destructive">
              Enter a valid email address or a 10-digit Indian mobile number.
            </p>
          ) : null}
          <DialogFooter className="pt-2">
            <Button type="submit" disabled={saving} className="w-full sm:w-auto">
              {saving ? "Saving…" : "Notify me"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
