// EventRegistrationModal.jsx
"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import { resgisEvent } from "@/utils/funcionApi/create";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

const EventRegistrationModal = ({ isOpen, onClose, eventId }) => {
  const [mutating, setMutating] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    phone_number: "",
    participants: "",
    unit: "",
    position: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const mutation = useMutation({
    mutationFn: ({ objects }) => resgisEvent(objects),
    onSuccess: () => {
      setMutating(false);
      setFormData({
        name: "",
        gender: "",
        phone_number: "",
        participants: "",
        unit: "",
        position: "",
      });
      toast.success("Đăng ký thành công", {
        duration: 4000,
        position: "top-center",
      });
      onClose();
    },
    onError: () => {
      setMutating(false);
      toast.error("Có lỗi xảy ra. Vui lòng thử lại.");
    },
  });

  const handleSubmit = async () => {
    const objects = {
      event_id: eventId,
      name: formData.name,
      gender: formData.gender,
      phone_number: formData.phone_number,
      participants: formData.participants,
      unit: formData.unit,
      position: formData.position,
    };
    console.log("Submitting registration:", { objects });
    setMutating(true);
    mutation.mutate({ objects });
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose}>
      <ModalContent>
        <ModalHeader>Đăng Ký Tham Gia Sự Kiện</ModalHeader>
        <ModalBody>
          <Input
            label="Họ và tên"
            placeholder="Nhập họ và tên"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
          />
          <RadioGroup
            label="Giới tính"
            name="gender"
            value={formData.gender}
            onValueChange={(value) =>
              setFormData((prevData) => ({ ...prevData, gender: value }))
            }
          >
            <Radio value="Nam">Nam</Radio>
            <Radio value="Nữ">Nữ</Radio>
            <Radio value="Khác">Khác</Radio>
          </RadioGroup>

          <Input
            label="Số điện thoại"
            placeholder="Nhập số điện thoại"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            fullWidth
          />
          <Input
            label="Đối tượng tham gia"
            placeholder="Đối tượng tham gia"
            name="participants"
            value={formData.participants}
            onChange={handleChange}
            fullWidth
          />
          <Input
            label="Đơn vị công tác"
            placeholder="Nhập đơn vị công tác"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            fullWidth
          />
          <Input
            label="Chức vụ công tác"
            placeholder="Nhập chức vụ công tác"
            name="position"
            value={formData.position}
            onChange={handleChange}
            fullWidth
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Hủy
          </Button>
          <Button color="primary" onPress={handleSubmit}>
            Đăng ký
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EventRegistrationModal;
