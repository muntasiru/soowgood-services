import {
  getDiagnosticBranchByProviderName,
  // getDiagonsticTestByProviderId,
} from "@/app/api/services";
import BranchSelect from "./branch-select";

const HospitalCardAction = async ({ provider }: any) => {
  const branchList = await getDiagnosticBranchByProviderName(provider);

  return <>{<BranchSelect branchList={branchList} provider={provider} />}</>;
};

export default HospitalCardAction;
