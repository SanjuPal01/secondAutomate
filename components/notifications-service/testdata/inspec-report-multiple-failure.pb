
	b4df00d03*?
	b4df00d037https://localhost/compliance/reporting/nodes/deadbeef03sad-node"
deadbeef03*1.30.02 (:?
ssh	Basic SSH1.1.0"=Verify that SSH Server and SSH Client are configured securely*Chef Software, Inc.2 Proprietary, All rights reserved:Chef Software, Inc.Bsupport@chef.ioJ@f56ef31e9e8be7c9064e84f1db699d3f0175924a0ee4517e3a626c38727ebf93R b?
basic-2  ?? /etc/ssh should be owned by root"?control 'basic-2' do
  impact 1.0
  title '/etc/ssh should be owned by root'
  desc '
    The OpenSSH configuration folder should be owned
    by the root user. It is an important step towards making
    sure, that configuration files are only changed by
    priviledged users.
  '
  describe file('/etc/ssh') do
    it { should be_owned_by 'root' }
  end
end
*?The OpenSSH configuration folder should be owned
by the root user. It is an important step towards making
sure, that configuration files are only changed by
priviledged users.2(
$base/ssh/controls/ssh_folder_spec.rbJQ
failed'File /etc/ssh should be owned by "root"??<"2017-07-05 14:08:05 +0200Rb?
basic-3fff?+/etc/ssh should have limited access to 0755"?control 'basic-3' do
  impact 0.5
  title '/etc/ssh should have limited access to 0755'
  desc '
    The OpenSSH configuration folder should have restricted
    access permissions. It is an important step towards making
    sure, that configuration files are only changed by
    priviledged users, while leaving them readable for the
    SSH client.
  '
  describe file('/etc/ssh') do
    it { should_not be_writable.by('group') }
    it { should_not be_writable.by('others') }
    it { should_not be_readable.by('others') }
  end
end
*?The OpenSSH configuration folder should have restricted
access permissions. It is an important step towards making
sure, that configuration files are only changed by
priviledged users, while leaving them readable for the
SSH client.2(
$base/ssh/controls/ssh_folder_spec.rb%J?
failed.File /etc/ssh should not be readable by others0e`;"2017-07-05 14:08:05 +0200*3expected File /etc/ssh not to be readable by othersR j 