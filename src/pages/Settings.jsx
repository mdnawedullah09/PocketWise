import Icon from "../components/Icon";

function Settings({ onResetData, demoMode }) {
  return (
    <main className="page-content subpage">
      <div className="subpage-heading">
        <div>
          <p className="eyebrow">PREFERENCES</p>
          <h2>Settings</h2>
          <p>Control your PocketWise demo and saved browser data.</p>
        </div>
      </div>

      <div className="settings-grid">
        <div className="panel settings-card">
          <div className="setting-icon"><Icon name="wallet" size={24} /></div>
          <h3>Account</h3>
          <p><strong>Samar</strong><br />Student Account</p>
          <div className="setting-row"><span>Currency</span><strong>₹ INR</strong></div>
          <div className="setting-row"><span>Data storage</span><strong>Browser LocalStorage</strong></div>
          <div className="setting-row"><span>Current mode</span><strong>{demoMode ? "Demo Mode" : "Live Mode"}</strong></div>
        </div>

        <div className="panel danger-card">
          <h3>Reset demo data</h3>
          <p>Restore the polished sample dashboard and remove the expenses currently saved in this browser.</p>
          <button className="danger-button" onClick={onResetData}>Reset All Data</button>
        </div>
      </div>
    </main>
  );
}

export default Settings;
