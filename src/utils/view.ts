/* Copyright (c) 2021-2022 SnailDOS */

import { ipcRenderer } from 'electron';

export const callViewMethod = async (
  id: number,
  method: string,
  ...args: any[]
): Promise<any> => {
  return await ipcRenderer.invoke(`web-contents-call`, {
    args,
    method,
    webContentsId: id,
  });
};
