/* Core Palette Configurations */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #0A0A0A;
    color: #FFFFFF;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
}

/* PREMIUM CORNER WATERMARK (FINE-PRINT ACCENT) */
body::before {
    content: "";
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 80px;
    height: 80px;
    background-image: url('1782317562598.jpg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.2;
    pointer-events: none;
    z-index: 10;
}

header {
    background-color: #121212;
    border-bottom: 2px solid #222222;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
}

.brand-container {
    display: flex;
    align-items: center;
    gap: 12px;
}

.app-emblem-fallback {
    width: 38px;
    height: 38px;
    border-radius: 6px;
    border: 1px solid #34C759;
    background-image: url('1782317562598.jpg');
    background-size: cover;
}

.logo-text {
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1.5px;
}

.logo-text span { color: #34C759; }

.header-controls {
    display: flex;
    gap: 10px;
    align-items: center;
}

.lang-selector, .tier-selector {
    background-color: #222222;
    border: 1px solid #444444;
    color: #FFFFFF;
    font-size: 11px;
    padding: 6px 12px;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    font-weight: bold;
}

.master-container {
    display: grid;
    grid-template-columns: 360px 1fr 360px;
    flex: 1;
    height: calc(100vh - 60px);
    position: relative;
    z-index: 1;
}

.sidebar-left, .sidebar-right {
    background-color: #121212;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow-y: auto;
}

.sidebar-left { border-right: 1px solid #222222; }
.sidebar-right { border-left: 1px solid #222222; }

.main-canvas {
    background-color: #0A0A0A;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow-y: auto;
}

.module-box {
    background-color: #141414;
    border: 1px solid #262626;
    border-radius: 8px;
    padding: 15px;
    position: relative;
}

.secure-treasury-border { border-color: #34C759; }
.social-profile-border { border-color: #007AFF; }

/* SOCIAL DESIGN OVERRIDES */
.social-user-card {
    display: flex;
    align-items: center;
    gap: 12px;
    background: #1B1B1B;
    padding: 10px;
    border-radius: 6px;
    margin-bottom: 10px;
}

.social-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #007AFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 16px;
}

.social-handle {
    font-size: 13px;
    font-weight: bold;
    color: #FFF;
}

.social-meta {
    font-size: 10px;
    color: #777;
    margin-top: 2px;
}

.social-metric-pill-box {
    display: flex;
    gap: 8px;
}

.social-pill {
    flex: 1;
    background-color: #222;
    border: 1px solid #333;
    padding: 6px;
    border-radius: 4px;
    font-size: 11px;
    text-align: center;
    font-weight: 600;
}

.module-title {
    color: #777777;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 12px;
    letter-spacing: 1px;
}

.config-card {
    background: #1B1B1B;
    padding: 10px;
    border-radius: 4px;
    font-size: 12px;
    margin-bottom: 8px;
    line-height: 1.4;
}

.green-accent { border-left: 3px solid #34C759; }
.blue-accent { border-left: 3px solid #007AFF; }
.orange-accent { border-left: 3px solid #FF9500; }

.video-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
}

.video-feed {
    background-color: #000000;
    border: 1px solid #2E2E2E;
    border-radius: 6px;
    position: relative;
    min-height: 190px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.blue-border { border-color: #007AFF; }
.purple-border { border-color: #5856D6; }
.waiting-mesh { color: #444; font-size: 11px; z-index: 2; }

.hardware-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}

.feed-label {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: rgba(0,0,0,0.8);
    font-size: 10px;
    padding: 4px 8px;
    border-radius: 3px;
    border: 1px solid #333;
    z-index: 2;
}

.control-panel-mini {
    margin-top: 10px;
    display: flex;
    gap: 10px;
}

.btn-action {
    background-color: #007AFF;
    border: none;
    color: #FFFFFF;
    font-size: 11px;
    font-weight: bold;
    padding: 8px 14px;
    border-radius: 4px;
    cursor: pointer;
}

.btn-action.live { background-color: #FF3B30; }

.subtitle-box {
    background: rgba(0, 0, 0, 0.9);
    border: 1px solid #34C759;
    padding: 12px;
    border-radius: 6px;
    font-size: 13px;
    text-align: center;
    color: #FFF;
    min-height: 48px;
    margin-top: 10px;
}

.switchboard-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 11px;
}

.switchboard-table th, .switchboard-table td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #222222;
}

.switchboard-table th {
    color: #444;
    text-transform: uppercase;
    font-size: 9px;
}

.primary-vocal { color:#34C759; }

.btn-patch {
    background-color: #34C759;
    border: none;
    color: #000;
    font-size: 9px;
    padding: 3px 8px;
    border-radius: 3px;
    font-weight: bold;
    cursor: pointer;
}

.btn-patch.disabled {
    background-color: #333333 !important;
    color: #777777 !important;
    cursor: not-allowed;
}

.stat-row {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding: 6px 0;
    border-bottom: 1px solid #222222;
}

.active-green-text { color:#34C759; font-weight: bold; }

.revenue-trends-panel {
    margin-top: 12px;
    font-size: 11px;
    display: none;
}

.trend-divider {
    border-top: 1px dashed #333;
    margin-bottom: 10px;
}

.trend-header {
    color: #FF9500;
    font-weight: bold;
    letter-spacing: 0.5px;
    margin-bottom: 6px;
}

.trend-row {
    display: flex;
    justify-content: space-between;
    padding: 4px 0;
    color: #aaa;
}

.chat-container {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-height: 320px;
    padding-right: 5px;
}

.alert-row {
    background: #1B1B1B;
    padding: 8px;
    border-radius: 4px;
    font-size: 11px;
    border-left: 3px solid #007AFF;
}

.lock-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(10, 10, 10, 0.9);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    z-index: 5;
}

.lock-overlay.hidden { display: none !important; }
.lock-msg {
    font-size: 12px;
    color: #FF9500;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.lock-desc { font-size: 11px; color: #aaa; text-align: center; padding: 0 20px; }
.flex-column { flex-direction: column; }
.flex-1 { flex: 1; }

 
