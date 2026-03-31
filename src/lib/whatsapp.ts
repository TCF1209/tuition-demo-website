import { WHATSAPP_NUMBER } from "./constants";

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildEnrolMessage({
  name,
  branch,
  level,
  subjects,
  contact,
  remarks,
}: {
  name: string;
  branch?: string;
  level: string;
  subjects: string[];
  contact: string;
  remarks?: string;
}) {
  let msg = `您好！我想为孩子报名满汉全习。\nHi! I'd like to enrol at MH Learning Centre.\n\n`;
  msg += `学生姓名 Name: ${name}\n`;
  if (branch) {
    msg += `校区 Campus: ${branch}\n`;
  }
  msg += `年级 Level: ${level}\n`;
  msg += `科目 Subjects: ${subjects.join(", ")}\n`;
  msg += `联系号码 Contact: ${contact}\n`;
  if (remarks) {
    msg += `备注 Remarks: ${remarks}\n`;
  }
  return buildWhatsAppLink(msg);
}
