export interface PlatformFacilitiModel {
  serviceName: string;
  description: string | null;
  slug: string;
  isDeleted: false;
  deleterId: null;
  deletionTime: null;
  lastModificationTime: null;
  lastModifierId: null;
  creationTime: string;
  creatorId: null;
  id: number;
}
export interface DiagnosticCenterModel {
  id: number;
  platformFacilityId: 0;
  platformFacilityName: string;
  providerOrganizationName: string;
  organizationCode: string;
  contactPerson: string;
  contactPersonMobileNo: string;
  contactPersonEmail: string;
  address: string;
  organizationPhoneNumber: string;
  organizationAvailability: string;
  isActive: true;
}
