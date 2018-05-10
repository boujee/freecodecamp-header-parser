'use strict';

import express from 'express';
import accepts from 'accepts';

function getLanguage(req) {
  const languages = accepts(req).languages();
  if (languages.length > 0) return languages[0];
  return null;
}

function getOS(req) {
  const userAgent = req.get('User-Agent');
  const regex = /^.+\((.+)\).*$/;
  const res = regex.exec(userAgent);
  if (res === null) return null;
  if (res.length < 2) return null;
  return res[1];
}

function whoami(req, res) {
  const ipaddress = req.ip;
  const language = getLanguage(req);
  const software = getOS(req);
  res.json({ipaddress, language, software});
}

export default () => express().get('/api/whoami', whoami);
