"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Input,
  Form,
} from "@heroui/react";

interface AuthModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onOpenChange }) => {
  const [errors, setErrors] = React.useState({ username: "", password: "" });
  const [formValues, setFormValues] = React.useState({ username: "", password: "" });
  const [submittedData, setSubmittedData] = React.useState<{ username?: string; password?: string } | null>(null);

  const handleInputChange = (name: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = (formData: FormData) => {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    let newErrors = { username: "", password: "" };
    let isValid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      newErrors.username = "Введите корректный email";
      isValid = false;
    }

    if (password.length < 6) {
      newErrors.password = "Пароль должен быть минимум 6 символов";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{
        base: "bg-zinc-900/90 backdrop-blur-xl border border-zinc-700 shadow-[0_0_35px_rgba(255,215,0,0.15)]",
        header: "text-gold-300 font-bold text-xl border-b border-zinc-700",
        body: "py-6",
        closeButton: "text-zinc-400 hover:text-gold-300",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Форма регистрации</ModalHeader>
            <ModalBody>
              <Form
                className="w-full flex flex-col gap-5 p-4 bg-zinc-900/40 border border-zinc-700 rounded-xl shadow-lg"
                onReset={() => setSubmittedData(null)}
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  if (!validateForm(formData)) return;

                  const username = formData.get("username") as string;
                  const password = formData.get("password") as string;

                  setSubmittedData({ username, password });
                  console.log("Логин:", username);
                  console.log("Пароль:", password);
                }}
              >
                <Input
                  isRequired
                  label="Логин"
                  name="username"
                  placeholder="Введите почту"
                  value={formValues.username}
                  onChange={(e) => handleInputChange("username", e.target.value)}
                  isInvalid={!!errors.username}
                  errorMessage={errors.username}
                  classNames={{
                    label: "text-zinc-300",
                    inputWrapper:
                      "bg-zinc-800/60 border border-zinc-700 shadow-inner shadow-black/80 hover:border-gold-300 focus-within:border-gold-300 transition",
                    input: "text-zinc-100",
                    errorMessage: "text-red-400",
                  }}
                />
                <Input
                  isRequired
                  label="Пароль"
                  name="password"
                  placeholder="Введите пароль"
                  type="password"
                  value={formValues.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  isInvalid={!!errors.password}
                  errorMessage={errors.password}
                  classNames={{
                    label: "text-zinc-300",
                    inputWrapper:
                      "bg-zinc-800/60 border border-zinc-700 shadow-inner shadow-black/80 hover:border-gold-300 focus-within:border-gold-300 transition",
                    input: "text-zinc-100",
                    errorMessage: "text-red-400",
                  }}
                />

                <div className="flex gap-2">
                  <Button
                    type="submit"
                    className="w-full bg-[url('/images/menu-main-button_gold-normal.png')] bg-cover bg-no-repeat text-white font-semibold shadow-[0_0_10px_rgba(212,175,55,0.4)] hover:shadow-[0_0_18px_rgba(212,175,55,0.8)] transition"
                  >
                    Отправить
                  </Button>
                  <Button type="reset" className="w-full bg-zinc-800 text-zinc-300 border border-zinc-700 hover:border-zinc-500">
                    Сбросить
                  </Button>
                </div>

                {submittedData && (
                  <div className="mt-4 p-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-zinc-300">
                    <p>
                      <strong>Ваш логин:</strong> {submittedData.username}
                    </p>
                    <p>
                      <strong>Ваш пароль:</strong> {submittedData.password}
                    </p>
                  </div>
                )}
              </Form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
