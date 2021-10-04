import Application from 'dummy/app';
import config from 'dummy/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import 'qunit-dom'; // imports types
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

// eslint-disable-next-line
setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
