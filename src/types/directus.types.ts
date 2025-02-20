interface ICCMetadata {
  version: string;
  intent: string;
  cmm: string;
  deviceClass: string;
  colorSpace: string;
  connectionSpace: string;
  platform: string;
  creator: string;
  description: string;
  copyright: string;
}

export interface FileMetadata {
  id: string;
  storage: string;
  filename_disk: string;
  filename_download: string;
  title: string;
  type: string;
  folder: string | null;
  created_on: string;
  uploaded_by: string;
  uploaded_on: string;
  modified_by: string | null;
  modified_on: string;
  filesize: number;
  width: number;
  height: number;
  focal_point_x: number | null;
  focal_point_y: number | null;
  duration: number | null;
  description: string | null;
  location: string | null;
  tags: string[];
  metadata: {
    icc: ICCMetadata;
  };
}
