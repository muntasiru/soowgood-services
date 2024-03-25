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
export interface BranchModel {
  platformFacilityId: number;
  platformFacilityName: string | null;
  providerOrganizationName: string;
  organizationCode: string;
  contactPerson: string;
  contactPersonMobileNo: string;
  contactPersonEmail: string;
  branch: string;
  address: string;
  organizationPhoneNumber: string;
  organizationAvailability: string;
  id: number;
}
export interface ProviderTestModel {
  serviceProviderId: number;
  serviceProviderName: string;
  pathologyCategoryId: number;
  pathologyCategoryName: string;
  pathologyTestId: number;
  pathologyTestName: string;
  providerRate: number;
  totalProviderRate: number | null;
  discountRate: number | null;
  finalRate: number | null;
  id: number;
}
export interface DiagonsticPackageTestModel {
  diagonsticPackageId: number;
  diagonsticPackageName: string;
  pathologyCategoryId: number;
  pathologyCategoryName: string;
  pathologyTestId: number;
  pathologyTestName: string;
  id: number;
}

export interface DiagonsticPackage {
  serviceProviderId: number;
  serviceProviderName: string | null;
  packageName: string;
  packageDescription: string;
  providerRate: number;
  discountRate: number | null;
  finalRate: number | null;
  id: number;
}
interface DiagnosticTest {
  id: number;
  diagnosticPathologyServiceManagementId: number;
  diagnosticTestId: number;
  pathologyCategoryAndTest: string;
  providerRate: number;
}

export interface DiagnosticServiceModel {
  id: number;
  serviceRequestCode: string;
  serviceProviderId: number;
  diagnosticServiceType: number;
  diagnosticPackageId: number;
  organizationCode: string;
  patientProfileId: number;
  patientName: string;
  patientCode: string;
  requestDate: string;
  appointmentDate: string;
  providerFee: number;
  discount: number;
  finalFee: number;
  serviceRequestStatus: number;
  diagnosticTestRequested?: DiagnosticTest[];
}

export interface PatientData {
  patientCode: string;
  patientName: string;
  patientProfileId: number;
  role: string;
  success: boolean;
  userName: string;
}
